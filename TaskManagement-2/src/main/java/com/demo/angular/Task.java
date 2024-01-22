package com.demo.angular;

import java.util.Date;
import java.util.List;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name="tasks")
public class Task {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String taskName;
	private String category;
	private String priority;
	private String notes;
	private Date startDate;
	private Date endDate;
	private String duration;
	private String status;
	@OneToMany(mappedBy = "task", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<DynamicField> label;
	@OneToMany(mappedBy = "task", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Activities> activities;
	
	public List<Activities> getActivities() {
		return activities;
	}
	public void setActivities(List<Activities> activities) {
		this.activities = activities;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes)
	{
		this.notes = notes;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate)
	{
		this.startDate = startDate;
	}
	public Date getEndDate()
	{
		return endDate;
	}
	public void setEndDate(Date endDate)
	{
		this.endDate = endDate;
	}
	public String getDuration()
	{
		return duration;
	}
	public void setDuration(String duration)
	{
		this.duration = duration;
	}
	public String getStatus()
	{
		return status;
	}
	public void setStatus(String status)
	{
		this.status = status;
	}
	
	public List<DynamicField> getLabel()
	{
		return label;
	}
	public void setLabel(List<DynamicField> label)
	{
		this.label = label;
	}
	
	public Task()
	{
		super();
	}
	public Task(int id, String taskName, String category, String priority, String notes, Date startDate, Date endDate,
			String duration, String status, List<DynamicField> label, List<Activities> activities)
	{
		super();
		this.id = id;
		this.taskName = taskName;
		this.category = category;
		this.priority = priority;
		this.notes = notes;
		this.startDate = startDate;
		this.endDate = endDate;
		this.duration = duration;
		this.status = status;
		this.label = label;
		this.activities = activities;
	}
	@Override
	public String toString()
	{
		return "Task [id=" + id + ", taskName=" + taskName + ", category=" + category + ", priority=" + priority
				+ ", notes=" + notes + ", startDate=" + startDate + ", endDate=" + endDate + ", duration=" + duration
				+ ", status=" + status + ", label=" + label + ", activities=" + activities + "]";
	}
	
	
	
 

}
