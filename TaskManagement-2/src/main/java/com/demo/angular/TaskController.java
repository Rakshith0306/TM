package com.demo.angular;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@CrossOrigin()
@RequestMapping("/api")
public class TaskController {

	@Autowired
	DynamicFieldRepo dynamicFieldrepo;

	@Autowired
	TaskService service;

	@Autowired
	TaskRepository repo;

	@Autowired
	ActivitiesRepo activitiesRepo;

	@PostMapping("/savetasks")
	public Task save(@RequestBody Task task) {
		Task tasks = repo.save(task);
		List<DynamicField> extraFields = task.getLabel();
		task.setLabel(extraFields);
		// Associate ExtraField entities with the Quotation and save them
		for (DynamicField ef : extraFields) {
			ef.setTask(tasks);
			dynamicFieldrepo.save(ef);
		}
		return service.save(task);
	}


	@PutMapping("/saveActivities")
	public Task saveactivies(@RequestBody Task task) {

		List<DynamicField> extraFields = task.getLabel();
		task.setLabel(extraFields);
		// Associate ExtraField entities with the task and save them
		for (DynamicField ef : extraFields) {
			ef.setTask(task);
			dynamicFieldrepo.save(ef);
		}
		List<Activities> activities = task.getActivities();
		task.setActivities(activities);
		System.out.println(activities);
		System.out.println("66" + task);
		// Associate ExtraField entities with the task and save them
		for (Activities ef : activities) {
			ef.setTask(task);
			activitiesRepo.save(ef);
		}
		return service.save(task);
	}

	@DeleteMapping("/deleteActivities/{id}/tasks/{taskId}")
	public String deleteActivies(@PathVariable(value = "id") int id, @PathVariable(value = "taskId") int taskId) {
		System.out.println("delete" + id);
//		Activities a=activitiesRepo.findById(id).orElse(null);
//		Task t=service.findById(taskId);
//		a.setTask(t);
		activitiesRepo.deleteActivityByIdAndTaskId(id, taskId);
		System.out.println("Activity deleted");
		return "deleted";
	}

	@GetMapping("/getAllTasks")
	public ResponseEntity<List<Task>> getAll() {
		return ResponseEntity.ok(service.getAllTask());
	}
	
	@GetMapping("/getAllActivities")
	public ResponseEntity<List<Activities>> getAllActivity() {
		return ResponseEntity.ok(activitiesRepo.findAll());
	}

	@GetMapping("/getById/{id}")
	public ResponseEntity<Task> getById(@PathVariable(value = "id") int id) throws ResourceNotFoundException {

		Task t1 = service.getTasKById(id).orElseThrow(() -> new ResourceNotFoundException("Not Found"));
		return ResponseEntity.ok().body(t1);
	}

	@PutMapping("updateTask/{id}")
	public ResponseEntity<Task> updateTask(@PathVariable(value = "id") int id, @RequestBody Task tasks) throws ResourceNotFoundException {
		//		Task task=repo.findById(id).orElseThrow(()->new ResourceNotFoundException("Not Found"));
		//		task.setTaskName(tasks.getTaskName());
		//		task.setCategory(tasks.getCategory());
		//		task.setPriority(tasks.getPriority());
		//		task.setStartDate(tasks.getStartDate());
		//		task.setEndDate(tasks.getEndDate());
		//		task.setDuration(tasks.getDuration());
		//		task.setStatus(tasks.getStatus());
		List<DynamicField> l = tasks.getLabel();
		for (int i = 0; i < l.size(); i++) {

			l.get(i).setTask(tasks);
		}
		repo.save(tasks);
		System.out.println("Updated sucessfully");
		return ResponseEntity.ok(tasks);


	}

	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable(value = "id") int id) {
		service.deleteTask(id);
		System.out.println("Deleted sucessfully");
		return "Deleted Successfully";
	}

	@GetMapping("/getByTaskName/{taskName}")
	public List<Task> getByTaskname(@PathVariable(value = "taskName") String taskName) {
		return repo.getByTaskName(taskName);
	}

	@GetMapping("/getByDuration/{duration}")
	public List<Task> getByDuration(@PathVariable(value = "duration") String duration) {
		return repo.getByDuration(duration);
	}
    
	@GetMapping("/getByDate/{startDate}")
	public List<Task> getByStartDate(@PathVariable("startDate") String startDate) {
		return repo.getByDate(startDate);
	}
	
	@GetMapping("getTodo/{status}")
	public List<Task> getTodo(@PathVariable(value = "status") String status) {
		return repo.getByStatus(status);
	}

	@GetMapping("getCompleted/{status}")
	public List<Task> getCompletd(@PathVariable(value = "status") String status) {
		return repo.getByStatus(status);
	}

	@GetMapping("getOnhold/{status}")
	public List<Task> getOnhold(@PathVariable(value = "status") String status) {
		System.out.println("on hold" + repo.getByStatus(status));
		return repo.getByStatus(status);
	}

	@GetMapping("getInprocess/{status}")
	public List<Task> getInprocess(@PathVariable(value = "status") String status) {
		return repo.getByStatus(status);
	}

	@PostMapping("/save1")
	public int saveStudent(@RequestBody Task t) {
		System.out.println("reached save api");
		service.save(t);
		return t.getId();
	}

	//   @PostMapping(value="/save2", consumes= {MediaType.APPLICATION_JSON_VALUE,MediaType.MULTIPART_FORM_DATA_VALUE})
	//	public String save(@RequestParam("file") MultipartFile file,@RequestPart("p") Task p) {
	//		FileEntity fileEntity = new FileEntity();
	//		
	//		try {
	//			fileEntity.setData(file.getBytes());
	//		} catch (IOException e) {
	//			e.printStackTrace();
	//		}
	//		if(p.getFileEntity()==null) {
	//			psave(p);
	//	//		return "Saved successfully";
	//	//	}.setFileEntity(fileEntity);
	//		}
	//service.
	

}
