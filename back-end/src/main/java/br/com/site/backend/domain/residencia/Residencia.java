package br.com.site.backend.domain.residencia;

import br.com.site.backend.domain.bairros.Bairros;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

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
    private Number valor;

    @Column(name="comodos")
    private Number comodos;


   // @JoinColumn(name = "bairros_id", referencedColumnName = "id")
   // @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL )
    //private Bairros bairros;
}
