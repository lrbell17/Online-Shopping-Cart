package com.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.ProductDao;
import com.dao.ShoppingCartDao;
import com.entity.Product;
import com.entity.ShoppingItem;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/search")
public class SearchController {
	
	@Autowired
	ProductDao productDao;
	
	@Autowired
	ShoppingCartDao shoppingDao;
	
	@GetMapping("/products")
	public List<Product> getProducts() {
		
		return productDao.findAll();
	
	}
	
	@GetMapping("/select/{id}")
	public List<ShoppingItem> selectProduct(@PathVariable int id) {
		
		Product product = productDao.findProduct(id);
		ShoppingItem item = new ShoppingItem(product.getProductId(), product.getProductName(), product.getPrice(), 1);
		
		shoppingDao.addItem(item);
		
		return shoppingDao.findAll();
		
	}
	
	@GetMapping("/find/{id}")
	public Product findProduct(@PathVariable int id) {
		return productDao.findProduct(id);
	}
	
}
