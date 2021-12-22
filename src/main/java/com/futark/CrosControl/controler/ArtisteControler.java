package com.futark.CrosControl.controler;



import com.futark.CrosControl.model.Artiste;
import com.futark.CrosControl.repository.ArtisteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping(value = "/artiste")
public class ArtisteControler {

    @Autowired
    public ArtisteRepository artisteRepository;


    @RequestMapping(
            value = "/create",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Artiste>> createArtiste(@RequestBody Artiste artiste){
        artisteRepository.save(artiste);
        return new ResponseEntity<>(artisteRepository.findAll(), HttpStatus.OK);
    }



    @RequestMapping(
            value = "/all",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<Artiste>> getALL(){
        return new ResponseEntity<>(artisteRepository.findAll(), HttpStatus.OK);
    }

}
