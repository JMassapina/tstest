package dk.webbies.tajscheck.paser.AST;

import com.google.javascript.jscomp.parsing.parser.util.SourceRange;
import dk.webbies.tajscheck.paser.ExpressionVisitor;

/**
 * Created by erik1 on 23-05-2016.
 */
public class RegExpExpression extends Expression {
    private final String value;

    public RegExpExpression(SourceRange loc, String value) {
        super(loc);
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public <T> T accept(ExpressionVisitor<T> visitor) {
        return visitor.visit(this);
    }
}
