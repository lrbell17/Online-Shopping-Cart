package com.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.entity.ShoppingItem;

@Repository
public interface ShoppingCartRepo extends CrudRepository<ShoppingItem, Integer>{

	public void deleteByProductId(int id);
	
	public ShoppingItem findByProductId(int id);
}
