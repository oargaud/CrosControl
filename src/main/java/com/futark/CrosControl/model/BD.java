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
    private List<Artiste> scenaristes;

    @ManyToMany
    private List<Artiste> illustrateurs;

    @ManyToOne
    private Edition edition;

    @ManyToOne
    private Saga saga;

    private String tome;

    @Lob
    @Column(length=100000)
    private byte[] photo;


    public BD() {
    }

    public BD(String title, List<Artiste> scenaristes, List<Artiste> illustrateurs, Edition edition, Saga saga, String tome, byte[] photo) {
        this.title = title;
        this.scenaristes = scenaristes;
        this.illustrateurs = illustrateurs;
        this.edition = edition;
        this.saga = saga;
        this.tome = tome;
        this.photo = photo;
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

    public List<Artiste> getScenaristes() {
        return scenaristes;
    }

    public void setScenaristes(List<Artiste> scenaristes) {
        this.scenaristes = scenaristes;
    }

    public List<Artiste> getIllustrateurs() {
        return illustrateurs;
    }

    public void setIllustrateurs(List<Artiste> illustrateurs) {
        this.illustrateurs = illustrateurs;
    }

    public Edition getEdition() {
        return edition;
    }

    public void setEdition(Edition edition) {
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

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }
}
