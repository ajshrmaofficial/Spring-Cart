package tech.ajayshrma.ecombackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.ajayshrma.ecombackend.model.Product;
import tech.ajayshrma.ecombackend.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository prodRepo;

    public List<Product> getProducts(){
        return prodRepo.findAll();
    }

    public Optional<Product> getProductByID(int productID){
        return prodRepo.findById(productID);
    }

    public Product addProduct(Product newProduct){
        if(newProduct.getId()<=0){
            System.out.println("Invalid product sent to inventory!!");
            return newProduct;
        }
        return prodRepo.save(newProduct);
    }

    public List<Product> searchProducts(String keyword) {
        return prodRepo.searchProducts(keyword);
    }
}
