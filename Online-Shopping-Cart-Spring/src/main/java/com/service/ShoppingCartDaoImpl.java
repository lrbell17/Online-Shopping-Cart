package com.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudapp.ShoppingCartRepo;
import com.entity.ShoppingItem;



@Service
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
	
}
