package com.futark.CrosControl.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Lob
    @Column(length=100000)
    private byte[] photo;

    @ElementCollection
    private List<String> tags = new ArrayList<String>();

    public Photo() {
    }

    public Photo(byte[] photo) {
        this.photo = photo;
    }

    public Photo(byte[] photo, List<String> tags) {
        this.photo = photo;
        this.tags = tags;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }
}



