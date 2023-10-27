package com.example.backend;

import com.example.backend.model.Product;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private ProductService productService;

    @Override
    public void run(String... args) throws Exception {
        Product product = new Product();
        product.setTitle("iPhone");
        product.setPrice(1200D);
        product.setQuantity(99);
        productService.save(product);

        Product product2 = new Product();
        product2.setTitle("Blackberry");
        product2.setPrice(1100D);
        product2.setQuantity(55);
        productService.save(product2);
    }
}
