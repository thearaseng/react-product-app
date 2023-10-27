package com.example.backend.service;

import com.example.backend.model.Product;

import java.util.List;

public interface ProductService {
    Product save(Product product);

    Product updateById(Long id, Product product);

    List<Product> findAll();

    Product findById(Long id);

    void deleteById(Long id);
}
