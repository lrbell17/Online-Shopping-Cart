package com.service;

import java.util.List;

import com.entity.ShoppingItem;

public interface ShoppingCartDao {

	public void addItem(ShoppingItem item);
	
	public List<ShoppingItem> findAll();

	void deleteItemById(int id);

	ShoppingItem updateItem(ShoppingItem item);

	ShoppingItem findItem(int id);
}
