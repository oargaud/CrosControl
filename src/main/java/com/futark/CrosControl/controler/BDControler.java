package com.futark.CrosControl.controler;

import com.futark.CrosControl.model.BD;
import com.futark.CrosControl.repository.BDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/bd")
public class BDControler {



    @Autowired
    public BDRepository bdRepository;

    @PostMapping("/create")
    public BD createBd(@RequestBody BD bd){

        return bdRepository.save(bd);
    }



}
