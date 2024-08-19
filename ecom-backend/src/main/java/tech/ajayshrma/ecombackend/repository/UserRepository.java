package tech.ajayshrma.ecombackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.ajayshrma.ecombackend.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
}
