package br.com.site.backend.domain.cidade;

import br.com.site.backend.response.controller.ReplyAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cidades")
public class CidadeController extends ReplyAbstractController {
    @Autowired
    private br.com.site.backend.domain.cidade.CidadeService CidadeService;

    // busca normal no banco de dados
    @GetMapping
    public ResponseEntity<?> findAll(){ return jsonResponse(CidadeService.findAll()); }

    //busca por id no banco de dados
    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id){ return jsonResponse(CidadeService.findById(id)); }


    // salvar no banco de dados
    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody Cidade cidade, Errors errors){
        return jsonResponse(CidadeService.save(cidade, errors));
    }

    // Atualizar no banco de dados
    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody Cidade cidade, Errors errors){
        return jsonResponse(CidadeService.save(cidade, errors));
    }

    //deletar por id no banco de dados
    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
        CidadeService.deleteById(id);
        return jsonResponse();
    }

}
