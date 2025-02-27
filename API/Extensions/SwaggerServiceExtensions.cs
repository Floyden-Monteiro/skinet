using Microsoft.OpenApi.Models;

namespace API.Extensions
{
    public static class SwaggerServiceExtensions
    {
        public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(c =>
            {
                var security = new OpenApiSecurityScheme
                {
                    Name = "Authentication",
                    Description = "JWT Auth Bearer Scheme",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = "Bearer",
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }


                };
                c.AddSecurityDefinition("Bearer", security);
                var securityRequirement = new OpenApiSecurityRequirement
                {
                    {security, new[] {"Bearer"}}
                };
                c.AddSecurityRequirement(securityRequirement);
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SkiNet API", Version = "v1" });
            });
            return services;
        }

        public static IApplicationBuilder UseSwaggerDocumentation(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI();
            return app;
        }
    }
}