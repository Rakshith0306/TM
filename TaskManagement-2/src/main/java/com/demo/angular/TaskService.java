package com.demo.angular;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TaskService {
 
	@Autowired
	TaskRepository repo;
	
	public Task save(Task task)
	{
	  return repo.save(task);
	}
	public List<Task> getAllTask()
	{
		return repo.findAll();
	}
	public Optional<Task> getTasKById(int id)
	{
		return repo.findById(id);
	}
	public void deleteTask(int id)
	{
		repo.deleteById(id);
	}
	public Task findById(int taskId) {
		return repo.findById(taskId).orElse(null);
		
	}
}