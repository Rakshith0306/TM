package com.demo.angular;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface TaskRepository extends JpaRepository<Task,Integer>{
	
	@Query(value="select * from tasks where task_name=:taskName",nativeQuery = true)
	public List<Task> getByTaskName(@Param("taskName") String taskName);
	
	
	@Query(value="select * from tasks where duration=:duration",nativeQuery = true)
	public List<Task> getByDuration(@Param("duration")String duration);
	
	@Query(value="select * from tasks where status=:status",nativeQuery = true)
	public List<Task> getByStatus(@Param("status")String status);


	@Query(value="select * from tasks where start_date=:startDate",nativeQuery = true)
	public List<Task> getByDate(@Param("startDate")String startDate);

	

	
}
