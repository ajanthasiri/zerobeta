package com.test.jwt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class JwtResponse {

    private String jwtToken;
    private String role;
    private int id;


    public JwtResponse(String jwtToken, String role,int id) {
        this.jwtToken = jwtToken;
        this.role = role;
        this.id=id;
    }
}
