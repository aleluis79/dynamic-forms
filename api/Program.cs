using System.Text.Json.Nodes;

var builder = WebApplication.CreateBuilder(args);

const string MyPolicy = "MyPolicy";

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options => options.AddPolicy(MyPolicy, p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseCors(MyPolicy);

app.MapGet("/colors", () =>
{
    return new Option[] {
        new Option("Red", "red"),
        new Option("Green", "green"),
        new Option("Blue", "blue")
    };
})
.WithName("colors")
.WithOpenApi();

app.MapGet("/countries", () =>
{
    return new Option[] {
        new Option("Argentina", "1"),
        new Option("Chile", "2"),
        new Option("Perú", "3")
    };
})
.WithName("countries")
.WithOpenApi();

app.Run();


public record Option (string Label, string Value);
