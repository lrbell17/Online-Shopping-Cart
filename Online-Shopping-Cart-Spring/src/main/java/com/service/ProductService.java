package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ProductDao;
import com.entity.Product;

@Service
public class ProductService {

	@Autowired
	ProductDao productDao;
	
	public void populate() {
		productDao.addProduct(new Product("AirPods", 99.99));
		productDao.addProduct(new Product("20 lb Weights", 44.99));
		productDao.addProduct(new Product("Face Mask", 0.99));
		productDao.addProduct(new Product("Desk Lamp", 29.99));
		productDao.addProduct(new Product("Bean Bag", 70.00));
		productDao.addProduct(new Product("Chair", 50.00));
		productDao.addProduct(new Product("Flat Screen TV", 650.00));
		productDao.addProduct(new Product("PS4", 300.00));
		productDao.addProduct(new Product("Xbox 1", 250.00));
		productDao.addProduct(new Product("Tube Socks (4 pack)", 15.00));
		productDao.addProduct(new Product("Skateboard", 50.00));
		productDao.addProduct(new Product("Baseball Glove", 65.00));
		productDao.addProduct(new Product("Coffee Grinder", 20.00));
		productDao.addProduct(new Product("Coffee Maker", 45.00));
		productDao.addProduct(new Product("Lava Lamp", 19.99));
		productDao.addProduct(new Product("AA Batteries", 5.00));
		productDao.addProduct(new Product("External Hard Drive", 100.00));
		productDao.addProduct(new Product("Gym Shorts", 14.99));
		productDao.addProduct(new Product("HDMI Cable", 30.00));
		productDao.addProduct(new Product("iPhone Charger", 13.50));
		productDao.addProduct(new Product("Jump Rope", 21.50));
		productDao.addProduct(new Product("Kleenex", 4.99));
		productDao.addProduct(new Product("Latex Gloves (50 pack)", 15.00));
		productDao.addProduct(new Product("LED Light", 12.00));
		productDao.addProduct(new Product("Laptop Charger", 50.00));
		productDao.addProduct(new Product("Mouse Pad", 9.99));
		productDao.addProduct(new Product("Nintendo Switch", 200.00));
		productDao.addProduct(new Product("Nail file", 1.99));
		productDao.addProduct(new Product("Office Chair", 150.00));
		productDao.addProduct(new Product("Oven Mitts", 7.50));
		productDao.addProduct(new Product("Paper Towels (24 pack)", 25.00));
		productDao.addProduct(new Product("Pens (20 pack)", 9.99));
		productDao.addProduct(new Product("Q Tips (250 pack)", 17.50));
		productDao.addProduct(new Product("Queen Mattress", 1200.00));
		productDao.addProduct(new Product("Roku", 50.00));
		productDao.addProduct(new Product("Rubbing Alcohol", 10.00));
		productDao.addProduct(new Product("Rubber Bands (20 pack)", 5.00));
		productDao.addProduct(new Product("Shower Curtain", 24.99));
		productDao.addProduct(new Product("Sunscreen", 9.49));
		productDao.addProduct(new Product("Toothpaste", 6.50));
		productDao.addProduct(new Product("Thermometer", 15.00));
		productDao.addProduct(new Product("Tweezers", 3.00));
		productDao.addProduct(new Product("USB Cable", 10.00));
		productDao.addProduct(new Product("Umbrella", 20.00));
		productDao.addProduct(new Product("Vacuum Cleaner", 200.00));
		productDao.addProduct(new Product("Vaseline", 6.00));
		productDao.addProduct(new Product("Water Gun", 22.50));
		productDao.addProduct(new Product("Wireless Headphones", 50.00));
		productDao.addProduct(new Product("Yoga Mat", 20.00));
		productDao.addProduct(new Product("Yeti Cooler", 150.00));
		productDao.addProduct(new Product("Zip Ties (20 pack)", 10.00));
		
	}
	
}
