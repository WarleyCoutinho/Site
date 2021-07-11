package br.com.site.backend.domain.bairros;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "bairros")
@Getter
@Setter
public class Bairros implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(name="nome")
    private String nome;

    @Column(name="cidade")
    private String cidade;

    //@JoinColumn(name = "bairros_id", referencedColumnName = "id")
    //@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL )
    //private Bairros bairros;

}
