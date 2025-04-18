FROM debian:bullseye

# Install Apache and ModSecurity dependencies
RUN apt-get update && \
    apt-get install -y apache2 libapache2-mod-security2 curl tar && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Enable necessary Apache modules
RUN a2enmod proxy proxy_http rewrite headers security2

# Download and configure OWASP CRS
RUN mkdir -p /etc/modsecurity/crs && \
    curl -L https://github.com/coreruleset/coreruleset/archive/refs/tags/v4.0.0.tar.gz \
    | tar -xz --strip-components=1 -C /etc/modsecurity/crs && \
    cp /etc/modsecurity/crs/crs-setup.conf.example /etc/modsecurity/crs/crs-setup.conf && \
    ls /etc/modsecurity/crs/rules >/dev/null

# Configure ModSecurity and include CRS properly
RUN mkdir -p /etc/modsecurity && \
    curl -o /etc/modsecurity/modsecurity.conf https://raw.githubusercontent.com/SpiderLabs/ModSecurity/v2.9.6/modsecurity.conf-recommended && \
    sed -i 's/SecRuleEngine DetectionOnly/SecRuleEngine On/' /etc/modsecurity/modsecurity.conf && \
    echo "Include /etc/modsecurity/crs/crs-setup.conf" >> /etc/modsecurity/modsecurity.conf && \
    echo "Include /etc/modsecurity/crs/rules/*.conf" >> /etc/modsecurity/modsecurity.conf




# Add ModSecurity config to Apache
RUN echo "IncludeOptional /etc/modsecurity/modsecurity.conf" >> /etc/apache2/apache2.conf

# Copy your existing reverse proxy config
COPY apache.conf /etc/apache2/sites-available/000-default.conf

# 🔥 Enable the site so Apache loads it
RUN a2ensite 000-default

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
