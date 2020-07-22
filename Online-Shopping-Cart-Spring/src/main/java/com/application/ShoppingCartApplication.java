package com.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.entity.ShoppingItem;
import com.service.ShoppingCartDao;

@SpringBootApplication
@ComponentScan(basePackages = "com")
@EntityScan(basePackages = "com.entity")
@EnableJpaRepositories(basePackages = "com.crudapp")
public class ShoppingCartApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ShoppingCartApplication.class, args);
	}

	@Autowired
	private ShoppingCartDao shoppingDao;
	
    @Override
    public void run(String...args) throws Exception {
       this.shoppingDao.addItem(new ShoppingItem("AirPods", 99.99, 1));
       this.shoppingDao.addItem(new ShoppingItem("20 lb Weights", 44.99, 2));
       this.shoppingDao.addItem(new ShoppingItem("Face mask", 0.99, 10));
       this.shoppingDao.addItem(new ShoppingItem("Desk Lamp", 29.99, 1));
       
    }
}
