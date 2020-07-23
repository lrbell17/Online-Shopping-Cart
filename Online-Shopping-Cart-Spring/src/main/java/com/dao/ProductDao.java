package com.dao;

import java.util.List;

import com.entity.Product;

public interface ProductDao {

	public void addProduct(Product product);
	
	public List<Product> findAll();

	Product findProduct(int id);
}
