package com.aurora.backend.cartapp.backend_cartapp.services;

import com.aurora.backend.cartapp.backend_cartapp.models.entities.Product;
import java.util.List;

public interface ProductService {

    List<Product> findAll();
}
