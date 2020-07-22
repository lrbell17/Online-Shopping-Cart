package com.crudapp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.ShoppingItem;

@Repository
public interface ShoppingCartRepo extends JpaRepository<ShoppingItem, Long>{


}
