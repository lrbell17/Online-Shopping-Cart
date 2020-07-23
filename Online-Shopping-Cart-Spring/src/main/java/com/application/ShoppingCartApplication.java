package com.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.dao.ProductDao;
import com.dao.ShoppingCartDao;
import com.entity.Product;
import com.entity.ShoppingItem;
import com.service.ProductService;

@SpringBootApplication
@ComponentScan(basePackages = "com")
@EntityScan(basePackages = "com.entity")
@EnableJpaRepositories(basePackages = "com.repo")
public class ShoppingCartApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ShoppingCartApplication.class, args);
	}

	@Autowired
	private ShoppingCartDao shoppingDao;
	
	@Autowired ProductService productService;
	
	@Autowired 
	ProductDao productDao;
	
    @Override
    public void run(String...args) throws Exception {
    	
    	this.productService.populate();
    	
    	Product product1 = this.productDao.findProduct(1);
    	Product product2 = this.productDao.findProduct(2);
    	Product product3 = this.productDao.findProduct(3);
    	Product product4 = this.productDao.findProduct(4);
    	
       this.shoppingDao.addItem(new ShoppingItem(product1.getProductId(), product1.getProductName(),
    		   product1.getPrice(), 1));
       this.shoppingDao.addItem(new ShoppingItem(product2.getProductId(), product2.getProductName(),
    		   product2.getPrice(), 2));
       this.shoppingDao.addItem(new ShoppingItem(product3.getProductId(), product3.getProductName(),
    		   product3.getPrice(), 10));
       this.shoppingDao.addItem(new ShoppingItem(product4.getProductId(), product4.getProductName(),
    		   product4.getPrice(), 1));

    }
}
