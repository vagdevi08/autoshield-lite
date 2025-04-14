FROM httpd:2.4

# Copy your custom configuration into the extra directory.
COPY apache.conf /usr/local/apache2/conf/extra/apache.conf

# # Append an Include directive to the default configuration so your settings are loaded.
RUN echo "Include conf/extra/apache.conf" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80
