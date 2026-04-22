package com.lms.lms.service;

import com.lms.lms.entity.Notes;
import com.lms.lms.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class NotesService {

    @Autowired
    private NotesRepository notesRepository;

    public void saveNote(Notes note) {
        notesRepository.save(note);
    }

    public List<Notes> getAll() {
        return notesRepository.findAll();
    }

    public List<Notes> getBySubject(String subject) {
        return notesRepository.findBySubject(subject);
    }

}