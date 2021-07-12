package br.com.site.backend.domain.cidade;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

import java.util.List;

@Service
public class CidadeService {
    @Autowired
    private br.com.site.backend.domain.cidade.CidadeRepository CidadeRepository;

    // metodo listar ou bucar todos
    public List<Cidade> findAll() {
        return CidadeRepository.findAll();
    }

    //metodo  Listar ou buscar por id
    public Cidade findById(long id){
        return CidadeRepository.findById(id).get();
    }

    // metodo salvar
    public Cidade save(Cidade cidade, Errors errors) {
        return CidadeRepository.save(cidade);
    }

    //metodo deletar
    public void deleteById(long id){
        CidadeRepository.deleteById(id);
    }
}
