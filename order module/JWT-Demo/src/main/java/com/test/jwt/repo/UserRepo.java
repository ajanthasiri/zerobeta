package com.test.jwt.repo;

import com.test.jwt.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {

    @Query(value="select * from users where username=?1",nativeQuery = true)
    User getUserByUsername(String username);
}
