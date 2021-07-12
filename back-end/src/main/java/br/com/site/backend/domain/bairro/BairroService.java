package br.com.site.backend.domain.bairro;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

@Service
public class BairroService {
    @Autowired
    private br.com.site.backend.domain.bairro.BairroRepository BairroRepository;

    // metodo listar ou bucar todos
    public List<Bairro> findAll() {
        return BairroRepository.findAll();
    }

    //metodo  Listar ou buscar por id
    public Bairro findById(long id){
        return BairroRepository.findById(id).get();
    }

    // metodo salvar
    public Bairro save(Bairro bairro, Errors errors) {
        return BairroRepository.save(bairro);
    }

    //metodo deletar
    public void deleteById(long id){
        BairroRepository.deleteById(id);
    }
}
