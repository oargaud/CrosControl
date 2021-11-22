package com.futark.CrosControl.controler;

import com.futark.CrosControl.model.CommandeEsp;
import com.futark.CrosControl.repository.CommandeEspRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller("/commandeesp")
public class CommandeEspControler {

    @Autowired
    public CommandeEspRepository commandeEspRepository;

    @PostMapping("/LumWcRdc")
    public CommandeEsp LumWcRdc(){

        CommandeEsp commandeEsp = new CommandeEsp();
//                commandeEspRepository.FindCommandeEspByName("LumWcRdc");
        commandeEsp.setStatus(!commandeEsp.isStatus());

        return commandeEspRepository.save(commandeEsp);
    }


}
