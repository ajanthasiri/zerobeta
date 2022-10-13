package com.test.jwt.controller;

import com.test.jwt.dto.UserDTO;

import com.test.jwt.dto.UserDTO;
import com.test.jwt.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UsersService usersService;

    @GetMapping("/getUser")
    public List<UserDTO> getUser(){
        return usersService.getAllUsers();
    }

    @PostMapping("/saveUser")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return usersService.saveUser(userDTO);
    }
}
