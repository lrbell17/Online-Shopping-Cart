package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.ShoppingItem;
import com.service.ShoppingCartDao;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/shopping")
public class CartController {

	@Autowired
	ShoppingCartDao shoppingDao;
	
	@GetMapping("/cart")
	public List<ShoppingItem> getShoppingCart() {
		return shoppingDao.findAll();
	}
	
	@GetMapping("/total")
	public double getTotal() {
		List<ShoppingItem> shoppingList = shoppingDao.findAll();
		double total = 0.0;
		
		for (ShoppingItem item : shoppingList) {
			total += item.getPrice() * item.getQuantity(); // price*quantity
		}
		
		return total;
		
	}
	
	@GetMapping("/delete/{id}")
	public List<ShoppingItem> deleteItem(@PathVariable int id) {
		shoppingDao.deleteItemById(id);
		
		return shoppingDao.findAll();
	}
	
	@GetMapping("/increment/{id}")
	public List<ShoppingItem> incrementItem(@PathVariable int id){
		
		ShoppingItem item = shoppingDao.findItem(id);
		item.setQuantity(item.getQuantity() + 1);
		
		shoppingDao.updateItem(item);
		
		return shoppingDao.findAll();
	}
	
	@GetMapping("/decrement/{id}")
	public List<ShoppingItem> decrementItem(@PathVariable int id){
		
		ShoppingItem item = shoppingDao.findItem(id);
		if (item.getQuantity() > 1){
			item.setQuantity(item.getQuantity() - 1);
			shoppingDao.updateItem(item);
		}
		else {
			shoppingDao.deleteItemById(id);
		}
		
		return shoppingDao.findAll();
	}
	
}
