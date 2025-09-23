package com.aurora.backend.cartapp.backend_cartapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.aurora.backend.cartapp.backend_cartapp.models.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long>{
    
}
