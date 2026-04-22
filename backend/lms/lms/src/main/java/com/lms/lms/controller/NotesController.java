package com.lms.lms.controller;

import com.lms.lms.entity.Notes;
import com.lms.lms.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/notes")
public class NotesController {

    @Autowired
    private NotesService notesService;

    @PostMapping
    public void addNote(@RequestBody Notes note) {
        notesService.saveNote(note);
    }

    @GetMapping("/{subject}")
    public List<Notes> getNotes(@PathVariable String subject) {
        return notesService.getBySubject(subject);
    }
}