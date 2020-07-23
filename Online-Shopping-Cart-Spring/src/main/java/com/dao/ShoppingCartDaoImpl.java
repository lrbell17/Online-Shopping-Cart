package com.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.entity.ShoppingItem;
import com.repo.ShoppingCartRepo;


@Service
@Transactional
public class ShoppingCartDaoImpl implements ShoppingCartDao{
	
	@Autowired
	ShoppingCartRepo shoppingRepo;
	
	@Override
	public void addItem(ShoppingItem item) {
		
		shoppingRepo.save(item);
		
	}

	@Override
	public List<ShoppingItem> findAll() {
		List<ShoppingItem> list = new ArrayList<ShoppingItem>();
		shoppingRepo.findAll().iterator().forEachRemaining(list::add);
		return list;
	}
	
	@Override
	public ShoppingItem findItem(int id) {
		
		return shoppingRepo.findByProductId(id);
	}

	@Override
	public ShoppingItem updateItem(ShoppingItem item) {

		shoppingRepo.save(item);
		
		return item;
	}
	

	@Override
	public void deleteItemById(int id) {
		shoppingRepo.deleteByProductId(id);
		
	}
	
}
