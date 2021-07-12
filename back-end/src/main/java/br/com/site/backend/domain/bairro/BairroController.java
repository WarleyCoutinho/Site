package br.com.site.backend.domain.bairro;


import br.com.site.backend.domain.cidade.Cidade;
import br.com.site.backend.response.controller.ReplyAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bairros")
public class BairroController extends ReplyAbstractController {
    @Autowired
    private br.com.site.backend.domain.bairro.BairroService BairroService;

    // busca normal no banco de dados
    @GetMapping
    public ResponseEntity<?> findAll(){ return jsonResponse(BairroService.findAll()); }

    //busca por id no banco de dados
    @GetMapping("{id}")
    public ResponseEntity<?> findById(@PathVariable long id){ return jsonResponse(BairroService.findById(id)); }


    // salvar no banco de dados
    @PostMapping
    public ResponseEntity<?> save(@Validated @RequestBody Bairro bairro, Errors errors){
        return jsonResponse(BairroService.save(bairro, errors));
    }

    // Atualizar no banco de dados
    @PutMapping
    public ResponseEntity<?> update(@Validated @RequestBody Bairro bairro, Errors errors){
        return jsonResponse(BairroService.save(bairro, errors));
    }

    //deletar por id no banco de dados
    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable long id){
        BairroService.deleteById(id);
        return jsonResponse();
    }
}
