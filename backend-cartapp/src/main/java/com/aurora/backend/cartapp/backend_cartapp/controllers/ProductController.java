import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com. aurora.backend.cartapp.backend_cartapp.models.entities.Product;
import com.aurora.backend.cartapp.backend_cartapp.services.ProductService;


@RestController
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public List<Product> list(){
        return service.findAll();
    }

}
