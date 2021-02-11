package eskavi.model.configuration;

import javax.persistence.Entity;
import java.util.HashMap;
import java.util.Map;

/**
 * Class extends {@link Select} and only allows two values. If the Switch is set the true value will be used otherwise the
 * false value. Because of that Switch always has a value.
 */
@Entity
public class Switch extends Select {
    public static String TRUE = "trueValue";
    public static String FALSE = "falseValue";

    /**
     * Constructs a new Switch
     *
     * @param name          the name of this Switch
     * @param allowMultiple boolean, whether this Switch can be added multiple times
     * @param expression    the {@link KeyExpression} of this Switch
     * @param trueValue     the value used if the Switch is toggled
     * @param falseValue    the value used if the Switch is not toggled
     */
    public Switch(String name, boolean allowMultiple, KeyExpression expression, String trueValue, String falseValue) {
        super(name, allowMultiple, expression, null);
        Map<String, String> content = new HashMap<>();
        content.put(TRUE, trueValue);
        content.put(FALSE, falseValue);
        this.setContent(content);
        //setting the default value
        this.setValue(FALSE);
    }

    protected Switch() {
    }

    @Override
    public String toString() {
        return "Switch{" +
                "name='" + getName() + "'" +
                ", allowMultiple=" + allowsMultiple() +
                ", keyExpression=" + getKeyExpression().toString() +
                ", value='" + getValue() + "'" +
                ", content=" + getContent() +
                "}";
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object o) {
        return super.equals(o);
    }

    @Override
    public Switch clone() {
        KeyExpression copy = new KeyExpression(getKeyExpression().getExpressionStart(), getKeyExpression().getExpressionEnd());
        Switch result = new Switch(getName(), allowsMultiple(), copy, getContent().get(TRUE), getContent().get(FALSE));
        // needed to be able to set value to previously set value
        result.setValue(getValue().equals(getContent().get(TRUE)) ? TRUE : FALSE);
        return result;
    }
}
