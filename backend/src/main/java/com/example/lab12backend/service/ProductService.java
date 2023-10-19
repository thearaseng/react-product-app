package com.example.lab12backend.service;

import com.example.lab12backend.model.Product;

import java.util.List;

public interface ProductService {
    Product save(Product product);

    List<Product> findAll();

    Product findById(Long id);
}
