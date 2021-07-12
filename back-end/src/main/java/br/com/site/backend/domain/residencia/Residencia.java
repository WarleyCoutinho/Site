package br.com.site.backend.domain.residencia;

import br.com.site.backend.domain.bairro.Bairro;
import br.com.site.backend.domain.endereco.Endereco;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "residencia")
@Getter
@Setter

public class Residencia implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name="tipo")
    private String tipo;

    @Column(name="valor")
    private String valor;

    @Column(name="comodos")
    private String comodos;


         @JoinColumn(name = "endereco_id", referencedColumnName = "id")
         @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL )
         private Endereco endereco;

       //   confirmação da tabela bairro co a tabela de residencia
        //@JoinColumn(name = "bairros_id", referencedColumnName = "id")
        //@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL )
        //private Bairro bairro;

}
