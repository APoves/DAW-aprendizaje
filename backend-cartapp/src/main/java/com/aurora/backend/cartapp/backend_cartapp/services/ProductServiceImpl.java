package com.aurora.backend.cartapp.backend_cartapp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.aurora.backend.cartapp.backend_cartapp.models.entities.Product;
import com.aurora.backend.cartapp.backend_cartapp.repositories.ProductRepository;

 @Service

public class ProductServiceImpl implements ProductServices {

    @Autowired
    private ProductRepository repository;

    @Override
    public List<Product> findAll() {
        return (List<Product>) repository.findAll();
    }


}


