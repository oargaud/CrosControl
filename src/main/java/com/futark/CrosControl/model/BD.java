package com.futark.CrosControl.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class BD {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    @ManyToMany
    private List<Auteur> auteurList;

    private String edition;

    private Saga saga;

    private String tome;

}
