package com.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.entity.Product;
import com.repo.ProductRepo;

@Service
@Transactional
public class ProductDaoImpl implements ProductDao{

	@Autowired
	ProductRepo productRepo;
	
	@Override
	public void addProduct(Product product) {
		
		productRepo.save(product);
		
	}

	@Override
	public List<Product> findAll() {
		List<Product> list = new ArrayList<Product>();
		productRepo.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public Product findProduct(int id) {
		return productRepo.findByProductId(id);
	}
	
	
	
	
}
