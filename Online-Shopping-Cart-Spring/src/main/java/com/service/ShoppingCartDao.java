package com.service;

import java.util.List;

import com.entity.ShoppingItem;

public interface ShoppingCartDao {

	public void addItem(ShoppingItem item);
	
	public List<ShoppingItem> findAll();
}
