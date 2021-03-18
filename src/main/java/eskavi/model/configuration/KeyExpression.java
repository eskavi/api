package eskavi.model.configuration;

import com.google.googlejavaformat.java.Formatter;
import com.google.googlejavaformat.java.FormatterException;
import eskavi.util.JavaClassConstants;

import javax.persistence.Embeddable;
import java.util.Objects;

/**
 * Represents the invariant parts of the KeyExpression of a Configuration. Is a simple storage class
 */
@Embeddable
public class KeyExpression {
    private String expressionStart;
    private String expressionEnd;

    /**
     * Constructs a new KeyExpression
     *
     * @param expressionStart
     * @param expressionEnd
     */
    public KeyExpression(String expressionStart, String expressionEnd) {
        setExpressionStart(expressionStart);
        setExpressionEnd(expressionEnd);
    }

    protected KeyExpression() {

    }

    public boolean isValid() {
        //TODO is there any better way to do this?
        String input = JavaClassConstants.getClassStart() + expressionStart + expressionEnd + "}}";
        try {
            new Formatter().formatSource(input);
            return true;
        } catch (FormatterException e) {
            return false;
        }
    }

    /**
     * Returns the part of the KeyExpression to be added in front of the value
     *
     * @return Start of the expression
     */
    public String getExpressionStart() {
        return expressionStart;
    }

    /**
     * Sets the beginning of the KeyExpression
     *
     * @param expressionStart String to start the expression
     */
    public void setExpressionStart(String expressionStart) {
        this.expressionStart = expressionStart;
    }

    /**
     * Returns the part of the KeyExpression to be added after the value
     *
     * @return End of the expression
     */
    public String getExpressionEnd() {
        return expressionEnd;
    }

    /**
     * Sets the beginning of the KeyExpression
     *
     * @param expressionEnd String to end the expression
     */
    public void setExpressionEnd(String expressionEnd) {
        this.expressionEnd = expressionEnd;
    }

    @Override
    public int hashCode() {
        return Objects.hash(expressionStart, expressionEnd);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        KeyExpression that = (KeyExpression) o;
        return Objects.equals(expressionStart, that.expressionStart) && Objects.equals(expressionEnd, that.expressionEnd);
    }

    @Override
    public String toString() {
        return "KeyExpression{" +
                "expressionStart='" + expressionStart + '\'' +
                ", expressionEnd='" + expressionEnd + '\'' +
                '}';
    }
}
