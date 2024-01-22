package com.demo.angular;

public class FileEntity {
	
	private byte[] data;

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public FileEntity(byte[] data) {
		super();
		this.data = data;
	}

	public FileEntity() {
		super();
	}
	
}
