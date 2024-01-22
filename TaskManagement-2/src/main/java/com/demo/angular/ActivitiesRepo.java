package com.demo.angular;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;



public interface ActivitiesRepo extends JpaRepository<Activities, Integer>{
	
//	@Query(value="delete from activities where id=:id and task_id=:taskId",nativeQuery = true)
//	void deleteActivity(@Param("id") int id, @Param("taskId") int taskId);
	@Transactional
    @Modifying
    @Query("DELETE FROM Activities a WHERE a.id = :activityId AND a.task.id = :taskId")
	void deleteActivityByIdAndTaskId(@Param("activityId") int activityId,@Param("taskId") int taskId);

	
	
	
	
	 
	
	

}
