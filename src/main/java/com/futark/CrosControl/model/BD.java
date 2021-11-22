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

    @ManyToOne
    private Saga saga;

    private String tome;


    public BD() {
    }

    public BD(String title, List<Auteur> auteurList, String edition, Saga saga, String tome) {
        this.title = title;
        this.auteurList = auteurList;
        this.edition = edition;
        this.saga = saga;
        this.tome = tome;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Auteur> getAuteurList() {
        return auteurList;
    }

    public void setAuteurList(List<Auteur> auteurList) {
        this.auteurList = auteurList;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public Saga getSaga() {
        return saga;
    }

    public void setSaga(Saga saga) {
        this.saga = saga;
    }

    public String getTome() {
        return tome;
    }

    public void setTome(String tome) {
        this.tome = tome;
    }
}
