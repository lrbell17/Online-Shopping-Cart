package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	
}
